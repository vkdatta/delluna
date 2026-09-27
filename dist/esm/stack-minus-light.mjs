export const name="stack-minus-light";
export const id="dl_2e1929f3c86a51297e00";
export const url=new URL("../icons/stack-minus-light.svg?v=361a42f58e9b7977bab45fe8da907a030551ab45c8d9d842ae1d43de83f8db8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
