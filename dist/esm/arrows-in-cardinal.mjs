export const name="arrows-in-cardinal";
export const id="dl_056c15b6c4fd42c89717";
export const url=new URL("../icons/arrows-in-cardinal.svg?v=c06f08102afa67c2dd0615212967314125e13a8009aa4aa34ae3859796459de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
