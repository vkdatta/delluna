export const name="smiley-sad-light";
export const id="dl_a742e53da5cc684d7df6";
export const url=new URL("../icons/smiley-sad-light.svg?v=956bf4deea7a423af3ac332ac91c358b351b3e899e074343ff1ece15fcf20316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
