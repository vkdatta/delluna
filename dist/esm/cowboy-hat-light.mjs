export const name="cowboy-hat-light";
export const id="dl_f965bbe9d1654c1380b3";
export const url=new URL("../icons/cowboy-hat-light.svg?v=259e2a26fe428f62f7a21506b3cf1e151a6dbb24f9984942828df440c992b8ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
