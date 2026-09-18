export const name="id_card_2";
export const id="dl_214fb4d311bf4872b179";
export const url=new URL("../icons/I/id_card_2.svg?v=f4a598e0e944043b3227196b1576e4dee2e6f458d1b519973e15f503b9345245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
