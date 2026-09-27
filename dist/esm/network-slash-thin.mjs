export const name="network-slash-thin";
export const id="dl_ef415e76d3704408bdd5";
export const url=new URL("../icons/network-slash-thin.svg?v=72ae081c26d1dad1796ae590dc6434174045df70809dbc7f189b0a6c26422376",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
