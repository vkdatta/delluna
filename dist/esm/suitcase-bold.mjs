export const name="suitcase-bold";
export const id="dl_a11932264e394d4e30f0";
export const url=new URL("../icons/suitcase-bold.svg?v=6a29dca6324b15a424f8d028c516b09ba6eeaef00504019792cf7cab94bd5cc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
