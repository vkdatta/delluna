export const name="line-vertical";
export const id="dl_b5d566a7d88e49adb10c";
export const url=new URL("../icons/line-vertical.svg?v=8242d2f207df9dcc482fcf648e6acaf6367833b42c94d14ebb71945e57e4f551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
