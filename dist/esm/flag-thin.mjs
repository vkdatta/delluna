export const name="flag-thin";
export const id="dl_ff21bf84e0054d4d9383";
export const url=new URL("../icons/flag-thin.svg?v=c94093700bd584a7a4aee94c234dd99b480d83e551355b37cd6d8cb57c4a4c4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
