export const name="twitter-logo";
export const id="dl_76ffd642c70549aa8ff7";
export const url=new URL("../icons/T/twitter-logo.svg?v=86c9283a32bb06a3659dbd930d5c91901dcd7964c1b7fa724bd369741952432e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
