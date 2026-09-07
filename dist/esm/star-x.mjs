export const name="star-x";
export const id="dl_d7af8668f37f4092a18a";
export const url=new URL("../icons/star-x.svg?v=c7d6ddc44877f302e79daa915cc47523a264d50f64b24c29691db2208a741529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
