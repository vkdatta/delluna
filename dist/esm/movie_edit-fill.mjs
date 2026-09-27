export const name="movie_edit-fill";
export const id="dl_116cdbbc6ece162a66e9";
export const url=new URL("../icons/movie_edit-fill.svg?v=2bccb33a15b09c93ff2495c6cc87980b178ba30258d77a56d55b86e053f90d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
