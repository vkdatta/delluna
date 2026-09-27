export const name="copyleft";
export const id="dl_bc4fb1bffde0466cbc67";
export const url=new URL("../icons/copyleft.svg?v=3587d321416798aa7dd7747fae716e660b2916923a5ea6cc83eb41c683430d60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
