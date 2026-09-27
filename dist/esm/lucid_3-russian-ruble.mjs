export const name="lucid_3-russian-ruble";
export const id="dl_520afd67b44845e89745";
export const url=new URL("../icons/lucid_3-russian-ruble.svg?v=7c5a8e9deb05b8fed4903ba95fde80e77df039a98c52d40a8e42e38a167a98fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
