export const name="confirmation_number";
export const id="dl_ff9a262240bbccd1bb7d";
export const url=new URL("../icons/confirmation_number.svg?v=6b6cbec42ab0431892e57156765f15675fefbd77e88a1054c4faf91ca9244787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
