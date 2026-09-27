export const name="lucid_1-chevrons-down-up";
export const id="dl_701eabb04e98410ca71a";
export const url=new URL("../icons/lucid_1-chevrons-down-up.svg?v=2e28c52caffa19cf72dc74f791da8d74f6bdbb7cbfcbc6ee021cf35d23a12c76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
