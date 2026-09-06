export const name="recycle-thin";
export const id="dl_12ad1bcf0cfe475bade2";
export const url=new URL("../icons/recycle-thin.svg?v=7b31600a8c9d26e6d726968b736d226764dcc2c4ad64f34818eb366d6e48f32e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
