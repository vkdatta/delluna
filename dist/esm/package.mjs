export const name="package";
export const id="dl_86bb5bf5853144ed8c58";
export const url=new URL("../icons/package.svg?v=30d8665ef2f065d8432d927f72185cca824e35f2fcb370f4b7a755cac6f99fdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
