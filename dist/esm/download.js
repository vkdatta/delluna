export const name="download";
export const id="dl_276c17f5a91c18895f3d";
export const url=new URL("../icons/download.svg?v=9f557c3f0e88288fd9cab1eec4752a52dec30f109751572b91aad3ea320e2013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
