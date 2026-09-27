export const name="thumbs-up-thin";
export const id="dl_257cc8b1425ee8178eca";
export const url=new URL("../icons/thumbs-up-thin.svg?v=a0648e220b6c9d958d452243b4b1113e2b02287502c8e8acbf2abfe9807f4b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
