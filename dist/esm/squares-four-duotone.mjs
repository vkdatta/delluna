export const name="squares-four-duotone";
export const id="dl_04776a8afa12bd1a451e";
export const url=new URL("../icons/squares-four-duotone.svg?v=4fad0642b028914a35f30365786d725b69abf64cb0061032eace5b526dcc1e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
