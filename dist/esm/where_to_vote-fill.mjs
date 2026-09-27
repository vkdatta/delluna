export const name="where_to_vote-fill";
export const id="dl_950ae3dad68cf122ac89";
export const url=new URL("../icons/where_to_vote-fill.svg?v=8e53be662df456a14f0a59b2fbbbe0db78fe05673d51cd8eb29010958b814e54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
