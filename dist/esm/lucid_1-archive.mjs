export const name="lucid_1-archive";
export const id="dl_cc17b59a554a4470abe9";
export const url=new URL("../icons/lucid_1-archive.svg?v=a6109f72812ec3995f5918e45cc9c66afb1fff3b0a7a93601836387d420654ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
