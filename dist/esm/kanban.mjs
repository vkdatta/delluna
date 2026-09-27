export const name="kanban";
export const id="dl_b1495dad71694376b3d2";
export const url=new URL("../icons/kanban.svg?v=81dca245bfdf2a95682298baa331d58a76055d7dce0a3d9be503ac137a5cb303",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
