export const name="border_right";
export const id="dl_ca70267f6b9f427da3ff";
export const url=new URL("../icons/B/border_right.svg?v=bebaac070777a557e2ae10dc81429a8b8fd1f96b0227a04c8c2f6d2c6cab299c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
