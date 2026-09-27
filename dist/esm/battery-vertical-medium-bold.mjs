export const name="battery-vertical-medium-bold";
export const id="dl_1b83890b7cd442508d38";
export const url=new URL("../icons/battery-vertical-medium-bold.svg?v=bb2f40e6bdc4a5574db415d6fe4fb76bb4635edaf134fa6ad31356afe83f2d3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
