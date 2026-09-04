export const name="hospital";
export const id="dl_5c290ce2e0f54a8daf8c";
export const url=new URL("../../icons/H/hospital.svg?v=f8fabc7326525fefc0dec50b2c2a425ba3ed63e4a6056aff8964e67ca3f3de54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
