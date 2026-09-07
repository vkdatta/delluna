export const name="list-heart";
export const id="dl_ecd49ebf9e854e55b041";
export const url=new URL("../icons/list-heart.svg?v=627efc6a03f205778b8e65c23cbb1eb4d6669433a104d340a02ae878392fe4d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
