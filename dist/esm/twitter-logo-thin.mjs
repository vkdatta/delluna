export const name="twitter-logo-thin";
export const id="dl_2126e0a0800cf5ffb9cc";
export const url=new URL("../icons/twitter-logo-thin.svg?v=a31dfa295a012635d2c9c286b12f5026492525f373be0e28fc0c7fb36f91fe6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
