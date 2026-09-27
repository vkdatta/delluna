export const name="brackets-square-bold";
export const id="dl_6633ab0c3e7c402bb6d3";
export const url=new URL("../icons/brackets-square-bold.svg?v=11be399e1aa44c29d5b2c13964e44f5054d79a93e6720f1d83ac8c89fb2cebb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
