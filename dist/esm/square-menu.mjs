export const name="square-menu";
export const id="dl_38f3f36c38d14cfdb300";
export const url=new URL("../icons/square-menu.svg?v=b468a7abe31312b5ebeda6dd621abe3d8c31580ffa8b6947d1642433bff99a4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
