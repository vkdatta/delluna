export const name="table-thin";
export const id="dl_989d8cc0069b03c80758";
export const url=new URL("../icons/table-thin.svg?v=2f30086ecc85f2b82c897883de1c4fa56153a676194cccf09047e068a27f9488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
