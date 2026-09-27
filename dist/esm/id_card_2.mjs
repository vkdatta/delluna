export const name="id_card_2";
export const id="dl_3654a5055bfdc7c00679";
export const url=new URL("../icons/id_card_2.svg?v=d0618ba4db73c2afeeb2b61a84eb10e72d1903cc8bbbc1652a3dcd9b0dd90bb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
