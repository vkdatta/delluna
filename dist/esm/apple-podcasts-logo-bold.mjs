export const name="apple-podcasts-logo-bold";
export const id="dl_cb0b141517614e45becf";
export const url=new URL("../icons/apple-podcasts-logo-bold.svg?v=8c285c4476cb7e612d8d56b13fc99c8f79fbcc6477689c5145e71cbc4c4ab4d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
