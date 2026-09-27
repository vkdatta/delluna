export const name="images-bold";
export const id="dl_1efc187a0f114ab58870";
export const url=new URL("../icons/images-bold.svg?v=2bf08279c9eac930e891744eb950a5ed79d30956be56d6f635d76ffff95474e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
