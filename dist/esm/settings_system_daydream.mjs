export const name="settings_system_daydream";
export const id="dl_bc4de053a6aa2518c5b5";
export const url=new URL("../icons/settings_system_daydream.svg?v=297c404cebf0738182f4b800db74cb07f0d99b92497b3efe60a6f67473e1c604",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
