export const name="exercise";
export const id="dl_5d5fe0f619fccb5a4610";
export const url=new URL("../icons/exercise.svg?v=ef3ed7c847e0bd02f842e09f12709518fd1f3df79d575e1806413805491adfe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
