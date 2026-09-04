export const name="beach-ball";
export const id="dl_e871b048b3564e31b07d";
export const url=new URL("../../icons/B/beach-ball.svg?v=ea6f4661c44f45b97ce4cb5fef83fde596a4e688731e610afe90ff3d897816c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
