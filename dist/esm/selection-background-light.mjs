export const name="selection-background-light";
export const id="dl_29f44f3803736d6d79a1";
export const url=new URL("../icons/selection-background-light.svg?v=579bd6dc76bed5f59cd14c94ffbd4ced80202331af9f048d86d64f9df610b30f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
