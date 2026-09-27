export const name="airplay-bold";
export const id="dl_2c854e7251454cfcbe2f";
export const url=new URL("../icons/airplay-bold.svg?v=cbfcbac387ceab6c66b96f17b57ec772b6289972a4b46595e42fb8f8cdee4c08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
