export const name="church-thin";
export const id="dl_12d82c272c14428fa44e";
export const url=new URL("../icons/church-thin.svg?v=f51d7e9b8cebf5cb40065c4b50e987a7a3a8c2efbc5660d885da909156c8e8f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
