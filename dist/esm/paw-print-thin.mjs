export const name="paw-print-thin";
export const id="dl_80c25273a0c14fc69864";
export const url=new URL("../icons/paw-print-thin.svg?v=74d65c36b5ec164c75c9a99e70472d167cb9efbdf7165160808cc38db197f797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
