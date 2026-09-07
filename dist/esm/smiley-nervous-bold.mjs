export const name="smiley-nervous-bold";
export const id="dl_811ebf903b554b6194ef";
export const url=new URL("../icons/S/smiley-nervous-bold.svg?v=25ef9a3f31d38713c76ec22343cc528e8e119b03c327addb4fe5ed633215ac2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
