export const name="vector-three-bold";
export const id="dl_a00c3ecfe0d547f28e57";
export const url=new URL("../icons/V/vector-three-bold.svg?v=fea8cc155ca562556f686bd3fb4050328b25cd8e599278b51b7495328d353d81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
