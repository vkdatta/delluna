export const name="pencil-simple-slash-fill";
export const id="dl_d051be338c56469f8d7d";
export const url=new URL("../icons/pencil-simple-slash-fill.svg?v=7064449f2ebd9af9ae1dca8add96ec3393e66d05448aa5250aeffb186a9869a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
