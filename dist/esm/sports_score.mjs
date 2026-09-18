export const name="sports_score";
export const id="dl_8e0da19fb02b461a80d7";
export const url=new URL("../icons/sports_score.svg?v=6223791be1f40c36bbb1f7427ca4df56212fe592acf5ebdb4d3ea5321f859f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
