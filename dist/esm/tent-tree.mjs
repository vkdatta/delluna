export const name="tent-tree";
export const id="dl_5658cc8913fb4c32bf81";
export const url=new URL("../icons/tent-tree.svg?v=9c8305aba2c4e776894862922c31cf6559ced74535ede4d03f54037277a2b9ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
