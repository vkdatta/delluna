export const name="bell-simple-slash-thin";
export const id="dl_656fd5a4ca5c46a6bc1d";
export const url=new URL("../icons/bell-simple-slash-thin.svg?v=342466f493d6f4a9c79a5b8fa58b9f1e011e67b2dbd0b2a4d148573f5c2296dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
