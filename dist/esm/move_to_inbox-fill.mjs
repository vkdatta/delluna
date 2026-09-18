export const name="move_to_inbox-fill";
export const id="dl_812b6dc946054ff48398";
export const url=new URL("../icons/M/move_to_inbox-fill.svg?v=bcdabfd9d12440c4e789abe8202b48de1ee3884cb45b92b98d1c97c54b602a0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
