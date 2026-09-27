export const name="chat_info-fill";
export const id="dl_751f1d154a62d3c32418";
export const url=new URL("../icons/chat_info-fill.svg?v=b697e4e70b0485fb0798c2403eb9ddfc962a7ddf7868b474b725de6e1ab73ff8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
