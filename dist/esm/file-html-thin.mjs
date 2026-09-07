export const name="file-html-thin";
export const id="dl_663c14fe2e774912b3f4";
export const url=new URL("../icons/file-html-thin.svg?v=565bea5605dfde0a475230632211c7751957c799c69482df8597a00431276d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
