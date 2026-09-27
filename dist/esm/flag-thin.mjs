export const name="flag-thin";
export const id="dl_ff21bf84e0054d4d9383";
export const url=new URL("../icons/flag-thin.svg?v=7db21bc48102e44e1f8350292f41583dab49c4e349607230a8fb21d89db4db89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
