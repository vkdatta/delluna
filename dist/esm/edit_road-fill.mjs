export const name="edit_road-fill";
export const id="dl_69815b738ac03b561fc0";
export const url=new URL("../icons/edit_road-fill.svg?v=0eecdcbdfa00128defbad2be15cfcd77945cfa4065f3c611bbbb735563d4ba59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
