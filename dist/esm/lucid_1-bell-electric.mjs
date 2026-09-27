export const name="lucid_1-bell-electric";
export const id="dl_a50fe189cbfb4ff890f7";
export const url=new URL("../icons/lucid_1-bell-electric.svg?v=8707138055e27091bf3987e39090b530711a9cdaa20437dc4a2b082366fede1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
