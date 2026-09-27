export const name="lock-simple-open";
export const id="dl_4f1c9c9da0d042638806";
export const url=new URL("../icons/lock-simple-open.svg?v=9cb1b7db86114c0e54db3840663335a3870f944237d8e67f30f603ddb978f2fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
