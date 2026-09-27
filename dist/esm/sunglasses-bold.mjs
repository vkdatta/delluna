export const name="sunglasses-bold";
export const id="dl_127c556654719f26c0e5";
export const url=new URL("../icons/sunglasses-bold.svg?v=b217ce78f050457ffb1ff5a57d96f5fb584c50b910bfea053f2cabc6648d0621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
