export const name="arrow-square-in";
export const id="dl_1752dd65a70249748fae";
export const url=new URL("../icons/arrow-square-in.svg?v=e6f7c295d4935055435993a3b574d339ac70b41cd52df878ca56d198c54c248f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
