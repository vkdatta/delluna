export const name="user-search";
export const id="dl_65af48716e4d4995b663";
export const url=new URL("../icons/user-search.svg?v=68ccf6054babcbe685ef51b5be486d0bc43351e1f1f05b2232455e0e389f35d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
